import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";
import { Country } from "./country.entity";

interface IDonor{
  id: number;
  name: string;
  country: number;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type DonorCreationAttributes = Optional<IDonor, 'id'>;

export class Donor extends Model<IDonor, DonorCreationAttributes> {
  declare id: number;
  declare name: string;
  declare country: number;
  declare email: string | null;
  declare password: string | null;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

Donor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'countries',
        key: 'id'
      }
    },
    email: {
      type: new DataTypes.STRING(70),
      allowNull: false,
      unique: true
    },
    password: {
      type: new DataTypes.STRING(256),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    tableName: 'donors',
    modelName: 'donor',
  }
);

Donor.belongsTo(Country, { foreignKey: 'country', as: 'modelCountry' });