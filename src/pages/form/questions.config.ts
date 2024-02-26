/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
export type QuestionType = {
  type: "SELECT";
  label: string;
  dataKey: string;
  isOptional?: true;
  options?: { label: string; value: string }[];
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
    type: "SELECT",
    label: "What are your expectations from this project?",
    dataKey: "expectations",
    options: [
      {
        label: "I want to learn new technologies",
        value: "I want to learn new technologies",
      },
      {
        label: "I want to meet new people",
        value: "I want to meet new people",
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
    label: "Where are you from?",
    dataKey: "location",
    options: [
      {
        label: "India",
        value: "India",
      },
      {
        label: "Abroad",
        value: "Abroad",
      },
    ],
    validation: Yup.string().min(3).required(),
  },
  {
    type: "SELECT",
    label: "Want to receive updates?",
    dataKey: "isUpdatesOpted",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
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
