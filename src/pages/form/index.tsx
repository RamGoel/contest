/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from "formik"
import { initialValues, questionConfig, validationSchema } from "./questions.config"
import FormSelect from "../../components/select"
import ProgressBar from "../../components/progress"
import { useEffect, useState } from "react"
import InfoPopup from "../../components/info-popup"
import { ArrowRight } from "lucide-react"
import SubmitPopup from "../../components/submit-popup"
import { useNavigate } from "react-router-dom"
const FormPage = ({ setData }: { setData: (data: any) => void }) => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState<number>(300); // 5 minutes in seconds
    const [isActive, setIsActive] = useState<boolean>(false);
    const [submitOpen, setSubmitOpen] = useState<string>('');

    useEffect(() => {
        let intervalId: any;

        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive, seconds]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const autoSubmitForm = (_data: any) => {
        setData(_data);
        navigate('/success')
        return <></>
    }
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            {!isActive ? <InfoPopup closePopup={() => {
                setIsActive(true)
            }} /> : null}
            {submitOpen ? <SubmitPopup value={submitOpen} closePopup={(result: boolean) => {
                setSubmitOpen('')
                if (result) {
                    navigate('/success')
                }
            }} /> : null}
            <Formik onSubmit={(data: any) => {
                if (seconds !== 0) {
                    setSubmitOpen(`${formatTime(seconds)}`)
                }
                setData(data)
            }} initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({ values, errors, setFieldValue, handleSubmit, setFieldTouched, touched }) => {
                    return <div className="w-11/12 mx-auto">
                        <ProgressBar progress={((seconds) / 300) * 100} />
                        <div>
                            <h3 className="text-4xl text-end font-bold">{formatTime(seconds)}</h3>
                        </div>
                        <div className="my-4">
                            <h3 className="text-2xl font-semibold">Oyya! Look at this</h3>
                            <p className="tracking-5 leading-5 text-sm font-semibold">Here's a short survey to help you better!</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                questionConfig.map(item => {
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
                                })
                            }
                        </div>
                        {seconds === 0 ? autoSubmitForm(values) : <></>}
                        <div className="flex items-center justify-end">
                            <button onClick={() => handleSubmit()} type="submit" className="bg-black tracking-widest font-semibold flex items-center justify-between min-w-[180px] hover:scale-90 transition-all px-4 py-3 text-white rounded-lg">
                                SUBMIT <ArrowRight className="text-xs" />
                            </button>
                        </div>
                    </div>
                }}


            </Formik>
        </div>
    )
}

export default FormPage