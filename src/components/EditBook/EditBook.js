import { dispatch } from '@adobe/redux-saga-promise';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { DocumentBookType, REQUEST_STATE, UserRoles, UserRolesConfig } from '~/app-configs';
import AppButton from '~/components/AppButton';
import AppInput from '~/components/AppInput';
import { EDIT_DOCUMENT_BOOK, RESET_EDIT_DOCUMENT_BOOK } from '~/containers/app/screens/Feature/redux/action';
import styles from './EditBook.module.sass';
import AppSelectInput from '~/components/AppSelectInput';
import ModalConfirm from '~/components/Modal/ModalConfirm';

const cx = classNames.bind(styles);

function getYearsOptions(startYear, endYear) {
    const options = [];

    for (let year = startYear; year <= endYear; year++) {
        options.push(
            <option key={year} value={year}>
                {year}
            </option>,
        );
    }

    return options;
}

function AppYearInput({ name, options }) {
    return <select name={name}>{options}</select>;
}
function EditBook({ onClose, title, refreshListTitle = () => {} }) {
    const defaultTitleValue = {
        ...title,
    };
    const dispatch = useDispatch();
    const updateAccount = useSelector((state) => state?.clerical?.editBook);
    console.log('updateAccount: ', updateAccount);

    const methods = useForm({
        defaultValues: defaultTitleValue,
    });

    function handleEditTitle(data) {
        console.log('data: ', data);
        dispatch(EDIT_DOCUMENT_BOOK(data));
    }

    useEffect(() => {
        if (updateAccount?.state === REQUEST_STATE.SUCCESS) {
            onClose();
            refreshListTitle();
            dispatch(RESET_EDIT_DOCUMENT_BOOK());
        }
    }, [updateAccount?.state]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => handleEditTitle(data))} className="form">
                <div className={cx('title_header')}>C???p nh???t th??ng tin s??ch</div>
                <Row gutter={20} className={cx('row_modal_add')}>
                    <Row gutter={[24, 12]}>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>T??n s??ch</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="nameBook" placeholder="Nh???p t??n s??ch" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>T??n t??c gi???</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="nameAuthor" placeholder="Nh???p t??n t??c gi???" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Nh?? xu???t b???n</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="publish" placeholder="Nh???p t??n nh?? xu???t b???n" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>N??m xu???t b???n</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppYearInput name="year" options={getYearsOptions(1975, 2023)} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Th??? lo???i</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppSelectInput
                                            name="category"
                                            options={[
                                                'Trinh th??m',
                                                'Ti???u thuy???t',
                                                'Truy???n tranh',
                                                'Khoa h???c',
                                                '?????i s???ng',
                                                'Truy???n ng???n',
                                                'T??? truy???n',
                                                'L???ch s???',
                                            ]}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Lo???i s??ch</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppSelectInput name="type" options={['S??ch th?????ng', 'S??ch qu?? gi??']} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                <Row
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    {/*<AppButton*/}
                    {/*    type="submit"*/}
                    {/*    style={{ marginLeft: '10px' }}*/}
                    {/*    color="#2080F6"*/}
                    {/*    bgColor="var(--primary-color)"*/}
                    {/*    isLoading={updateAccount?.state === REQUEST_STATE.REQUEST}*/}
                    {/*>*/}
                    {/*    C???p nh???t*/}
                    {/*</AppButton>*/}
                    <ModalConfirm
                        // onConfirm={(e) => handleDeleteTitle(record?._id)}
                        triggerBtn={
                            <AppButton
                                type="submit"
                                style={{ marginLeft: '10px' }}
                                color="#2080F6"
                                bgColor="var(--primary-color)"
                            >
                                C???p nh???t
                            </AppButton>
                        }
                    ></ModalConfirm>
                </Row>
            </form>
        </FormProvider>
    );
}

export default EditBook;
