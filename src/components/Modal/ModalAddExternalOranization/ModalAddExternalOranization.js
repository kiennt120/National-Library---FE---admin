import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_STATE } from '~/app-configs';
import AppButton from '~/components/AppButton';
import AppInput from '~/components/AppInput';
import AppTextArea from '~/components/AppTextArea';
import Modal from '~/components/Modal/AppModal';
import {
    GET_OUTSIDE_ORANIZATION,
    RESET_CREATE_OUTSIDE_ORANIZATION,
} from '~/containers/app/screens/Organization/redux/action';
import styles from './ModalAddExternalOranization.module.sass';

const cx = classNames.bind(styles);

function ModalAddExternalOranization({
    title,
    confirmText,
    cancelText,
    triggerBtn,
    onSubmit = () => {},
    onCancel = () => {},
}) {
    const methods = useForm();
    const closeRef = useRef();
    const createOutsideOranizations = useSelector((state) => state?.organization?.createOutsideOranizations);
    const dispatch = useDispatch();

    const onCloseModal = () => {
        onCancel();
        closeRef.current.click();
    };

    const onConfirm = (data) => {
        onSubmit(data);
        closeRef.current.click();
    };

    useEffect(() => {
        if (createOutsideOranizations?.state === REQUEST_STATE.SUCCESS) {
            dispatch(GET_OUTSIDE_ORANIZATION());
            dispatch(RESET_CREATE_OUTSIDE_ORANIZATION());
        }
    }, [createOutsideOranizations]);

    return (
        <Modal
            className="ant-modal"
            width={500}
            triggerBtn={triggerBtn}
            btnJustifyContent="center"
            contentStyle={{
                padding: '20px 20px 0px 20px',
            }}
            btnBoxStyle={{
                marginTop: '10px',
            }}
            closeRef={closeRef}
        >
            <div className={cx('header')}>{title}</div>
            <FormProvider {...methods}>
                <form
                    onSubmit={(e) => {
                        e.stopPropagation();
                        methods.handleSubmit((data) => onConfirm(data))(e);
                    }}
                    className="form"
                >
                    <AppInput
                        label="T??n c?? quan"
                        required={true}
                        name="name"
                        placeholder="Nh???p t??n c?? quan b??n ngo??i"
                    />
                    <div
                        style={{
                            marginTop: '12px',
                        }}
                    >
                        <AppInput
                            label="T??n vi???t t???t"
                            required={false}
                            name="shortName"
                            placeholder="Nh???p t??n vi???t t???t"
                        />
                    </div>
                    <div className={cx('button-handle')}>
                        <AppButton
                            onClick={onCloseModal}
                            bgColor="#F0F2FA"
                            textColor="#616879"
                            additionalStyle={{ marginRight: '10px' }}
                        >
                            {cancelText}
                        </AppButton>
                        <AppButton type="submit" bgColor="#2080F6">
                            {confirmText}
                        </AppButton>
                    </div>
                </form>
            </FormProvider>
        </Modal>
    );
}

export default ModalAddExternalOranization;
