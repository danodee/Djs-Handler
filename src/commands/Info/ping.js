module.exports = {
    name: "ping",
    developersCmd: false,
    description: "Description Goes Here.",
    userpermissions: ["USE_APPLICATION_COMMANDS", "VIEW_CHANNEL"],
    botpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, interaction) => {

        await interaction.editReply({
            content: client.i18n.get("en", "commands", "var1")
        });
    },
};