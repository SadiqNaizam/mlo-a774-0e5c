import { Configuration, LogLevel } from "@azure/msal-browser";

// For a full list of msal.js configuration options, visit:
// https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
export const msalConfig: Configuration = {
    auth: {
        // 'Application (client) ID' of your app registration in Azure portal - this value is a placeholder.
        clientId: "YOUR_CLIENT_ID_HERE",
        // Full authority URL, e.g., "https://login.microsoftonline.com/YOUR_TENANT_ID_HERE"
        authority: "https://login.microsoftonline.com/common",
        // You must register this URI on Azure portal/App Registration.
        // It should match the URL where your app is running.
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        // console.info(message);
                        return;
                    case LogLevel.Verbose:
                        // console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) for Microsoft Graph resources.
 */
export const loginRequest = {
    scopes: ["User.Read"]
};

/**
 * Note on Two-Step Verification (MFA):
 * Two-step verification is not configured in the client-side application code.
 * It is enforced by Azure Active Directory through Conditional Access policies.
 * When a user from your tenant signs in, Azure AD will automatically prompt them for
 * MFA if the policies require it. Your application code does not need to change.
 */