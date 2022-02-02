module.exports = (sequelize, DataTypes) => {
    const Record = sequelize.define('Record', {
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eggs : {
            type: DataTypes.INTEGER,
        },
        feed: {
            type: DataTypes.INTEGER
        },
        mortality: {
            type: DataTypes.INTEGER
        },
        moved: {
            type: DataTypes.BOOLEAN
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Record.associate = (models) => {
        Record.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Record
}