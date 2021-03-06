module.exports = function (sequelize, DataTypes) {
    var Contacts = sequelize.define("Contacts", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 140]
              }
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        work_phone: {
            type: DataTypes.STRING
        },
        co_name: {
            type: DataTypes.STRING
        }
    });
    Contacts.associate = function(models) {
        // Associating Contact with Company
        Contacts.belongsTo(models.Company, {
          onDelete: "cascade",
          foreignKey: {
              allowNull: false
          }
        });
      };
    return Contacts;
};