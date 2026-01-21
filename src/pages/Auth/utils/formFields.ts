export const formFields = [
    {
        name: "username",
        displayName: "Username",
        type: "text",
        placeholder: "Username",
        required: true,
    },
    {
        name: "firstname",
        displayName: "Firstname",
        type: "text",
        placeholder: "Lastname (optional)",
        required: false,
    },
    {
        name: "lastname",
        displayName: "Lastname",
        type: "text",
        placeholder: "Lastname (optional)",
        required: false,
    },
    {
        name: "password",
        displayName: "Password",
        type: "password",
        placeholder: "Password",
        required: true
    },
    {
        name: "email",
        displayName: "Email",
        type: "email",
        placeholder: "Email",
        required: true
    },
    {
        name: 'addressArea',
        displayName: 'Area',
        type: 'text',
        placeholder: 'Enter an area (optional)',
        required: false,
    },
    {
        name: 'addressStreet',
        displayName: 'Street',
        type: 'text',
        placeholder: 'Enter your street (optional)',
        required: false,
    },
    {
        name: 'addressNumber',
        displayName: 'Number',
        type: 'text',
        placeholder: 'Enter a house number (optional)',
        required: false,
    },
    {
        name: 'addressPo',
        displayName: 'Postal Code',
        type: 'text',
        placeholder: 'Enter your postal code (optional)',
        required: false,
    },
    {
        name: 'addressMunicipality',
        displayName: 'Municipality',
        type: 'text',
        placeholder: 'Enter a municipality (optional)',
        required: false,
    },
    {
        name: 'phoneType',
        displayName: 'Phone Type',
        type: 'select',
        options: [
            { value: 'mobile', label: 'Mobile' },
            { value: 'home', label: 'Home' },
            { value: 'work', label: 'Work' },
        ],
        placeholder: 'Select phone type (optional)',
        required: false,
    },
    {
        name: 'phoneNumber',
        displayName: 'Phone Number',
        type: 'text',
        placeholder: 'Enter your phone number (optional)',
        required: false,
    },
];

export const loginFields = [
    {
        name: "username",
        displayName: 'Username',
        type: 'text',
    },
    {
        name: 'password',
        type: "password",
    }
];
