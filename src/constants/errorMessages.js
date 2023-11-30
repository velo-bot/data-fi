// errorMessages.js

const errorMessages = {
    // User Authentication Errors
    "auth/invalid-email": "The email address is improperly formatted.",
    "auth/user-disabled": "The user account has been disabled by an administrator.",
    "auth/user-not-found": "No user found with the provided email address.",
    "auth/wrong-password": "Incorrect password. Please try again.",

    // Form Validation Errors
    "validation/required-field": "This field is required.",
    "validation/email-format": "Please enter a valid email address.",
    "validation/password-strength": "Password must contain at least 8 characters, including a number and an uppercase letter.",

    // Network and Server Errors
    "server/internal-error": "An internal server error occurred. Please try again later.",
    "network/offline": "No internet connection. Please check your network settings.",

    // Application-Specific Errors
    "app/invalid-operation": "The requested operation is not valid.",
    "app/quota-exceeded": "You have exceeded your quota. Please upgrade your plan to continue.",

    // Alerts and Notifications
    "alert/save-success": "Your changes have been saved successfully.",
    "alert/delete-confirmation": "Are you sure you want to delete this item? This action cannot be undone."
};

export default errorMessages;
