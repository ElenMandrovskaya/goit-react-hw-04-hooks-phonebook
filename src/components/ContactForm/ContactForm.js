import { useState } from 'react';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { Form, Label, Input, Button } from "./ContactForm.styled";

export function ContactForm({onSubmit}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameId = uuidv4();
  const telId = uuidv4();

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
    };
    
    const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ name, number });
    resetForm();
   };

   const resetForm = () => {
    setName("");
    setNumber("");
   };
  return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameId}> Name
          <Input
            id={nameId}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter contact name"
            required
          />
        </Label>

        <Label htmlFor={telId}> Phone Number
          <Input
            id={telId}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="Enter phone number"
            required
          />
        </Label>

        <Button type="submit">
          Add contact
        </Button>
      </Form>
    );
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};
// export class ContactForm extends Component {
//     state = {
//         contacts: [],
//         name: "",
//         number: ""
//     };

//     nameId = uuidv4();
//     telId = uuidv4();

//     handleChange = (evt) => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//     };
    
//     handleSubmit = (evt) => {
//     evt.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//    };

//    resetForm = () => {
//     this.setState({ name: "", number: "" });
//    };
    
//    render() {
//        const { name, number } = this.state;
       
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label htmlFor={this.nameId}> Name
//           <Input
//             id={this.nameId}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             placeholder="Enter contact name"
//             required
//           />
//         </Label>

//         <Label htmlFor={this.telId}> Phone Number
//           <Input
//             id={this.telId}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             placeholder="Enter phone number"
//             required
//           />
//         </Label>

//         <Button type="submit">
//           Add contact
//         </Button>
//       </Form>
//     );
//   }
// }



