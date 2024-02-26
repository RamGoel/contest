/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
export type QuestionType = {
  type: "SELECT";
  label: string;
  dataKey: string;
  isOptional?: true;
  options?: { label: string; value: string | boolean }[];
  validation: Yup.StringSchema<string>;
};
export const questionConfig: QuestionType[] = [
  {
    type: "SELECT",
    label: "What is your occupation?",
    dataKey: "occupation",
    options: [
      {
        label: "Engineer",
        value: "Engineer",
      },
      {
        label: "Doctor",
        value: "Doctor",
      },
      {
        label: "Government Employee",
        value: "Government Employee",
      },
      {
        label: "Other",
        value: "Other",
      },
    ],
    validation: Yup.string().min(3).required(),
  },
  {
    type: "SELECT",
    label: "What is your gender?",
    dataKey: "gender",
    options: [
      {
        label: "Male",
        value: "Male",
      },
      {
        label: "Female",
        value: "Female",
      },
      {
        label: "Other",
        value: "Other",
      },
    ],
    validation: Yup.string().required(),
  },
  {
    type: "INPUT",
    label: "What are your expectations from this project?",
    dataKey: "expectations",
    validation: Yup.string().min(3).required(),
  },
  {
    type: "INPUT",
    label: "Where are you from?",
    dataKey: "location",
    validation: Yup.string().min(3).required(),
  },
  {
    type: "SELECT",
    label: "Want to receive updates?",
    dataKey: "isUpdatesOpted",
    options: [
      {
        label: "Yes",
        value: true,
      },
      {
        label: "No",
        value: false,
      },
    ],
    validation: Yup.string().required(),
  },
];

export const initialValues = questionConfig.reduce(
  (acc: any, curr: QuestionType) => {
    acc[curr.dataKey] = "";
    return acc;
  },
  {}
);

export const validationSchema = Yup.object(
  questionConfig.reduce((acc: any, curr: QuestionType) => {
    acc[curr.dataKey] = curr.validation;
    return acc;
  }, {})
);