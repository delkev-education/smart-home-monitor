module.exports = {
    uiPort: process.env.PORT || 1880,
    flowFile: 'flows.json',
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || false,
    editorTheme: {
        projects: { enabled: false }
    },
    functionExternalModules: false,
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    exportGlobalContextKeys: false
};
