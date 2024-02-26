/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from "formik"
import { initialValues, questionConfig, validationSchema } from "./questions.config"
import FormInput from "../../components/input"
import FormSelect from "../../components/select"

const FormPage = () => {

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Formik onSubmit={(val) => {
                console.log(val)
            }} initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({ values, errors, setFieldValue, setFieldTouched, touched }) => {
                    return <div className="w-11/12 mx-auto">
                        <div className="my-4">
                            <h3 className="text-3xl font-semibold">Oyya! Look at this</h3>
                            <p className="tracking-5 leading-5 text-md font-semibold">Give us some answers to help you better!</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                questionConfig.map(item => {
                                    if (item.type === 'INPUT') {
                                        return <FormInput
                                            value={values[item.dataKey]}
                                            error={errors?.[item.dataKey]?.toString() ?? ''}
                                            label={item.label}
                                            required={!item?.isOptional}
                                            handleChange={(val: string | boolean) => {
                                                setFieldValue(item.dataKey, val)
                                            }}
                                            touched={touched[item.dataKey] as any}
                                            handleTouch={(state: boolean) => {
                                                setFieldTouched(item.dataKey, state)
                                            }}
                                        />
                                    } else {
                                        return <FormSelect
                                            value={values[item.dataKey]}
                                            error={errors?.[item.dataKey]?.toString() ?? ''}
                                            label={item.label}
                                            options={item.options}
                                            required={!item?.isOptional}
                                            handleChange={(val: string | boolean) => {
                                                setFieldValue(item.dataKey, val)
                                            }}
                                            touched={touched[item.dataKey] as any}
                                            handleTouch={(state: boolean) => {
                                                setFieldTouched(item.dataKey, state)
                                            }}
                                        />
                                    }
                                })
                            }
                        </div>
                        <button className="bg-black w-full p-2 py-3 text-white rounded-lg">
                            Submit
                        </button>
                    </div>
                }}


            </Formik>
        </div>
    )
}

export default FormPage