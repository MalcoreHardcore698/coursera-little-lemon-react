import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Full name is a required field!'),
  email: yup.string().required('Email is a required field!').email('Email is not valid!'),
  phone: yup.string().required('Phone is a required field!').matches(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/, "Phone number must match the form 233 00 000 0000"),
  guests: yup.number().min(1, 'There must be at least 1 guest!').required('Please specify number of guests per table!'),
  createdAt: yup.string().required('Please select date and time!'),
});
