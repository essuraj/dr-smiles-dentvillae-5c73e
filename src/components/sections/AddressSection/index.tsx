import * as React from 'react';
import classNames from 'classnames';

import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';

export default function AddressSection(props) {
    const { elementId, colors, styles = {} } = props;

    return (
        <Section elementId={elementId} className="sb-component-divider-section xs:p-1" colors={colors} {...getDataAttrs(props)}>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-2 sm:py-12">
                <h2 className="text-center">Get in touch</h2>
                <div>
                    <section>
                        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 xs:px-2 lg:px-24 max-w-7xl xs:px-5">
                            <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                                <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                                    <div className="p-6 lg:text-center">
                                        <label className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">Come visit us at</label>
                                        <h4 className="m-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">🗺️</h4>
                                        <address className="mt-3 text-base leading-relaxed text-gray-500">
                                            48/12, 1st floor, Kodigehalli Main Rd
                                            <br /> above Canara Bank, Block C
                                            <br /> <b>Sahakar Nagar</b>
                                            <br /> Bengaluru, Karnataka 560092.
                                        </address>
                                    </div>
                                </div>
                                <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                                    <div className="p-6 lg:text-center">
                                        <label className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">Call or email us at</label>
                                        <h4 className="m-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">📇</h4>
                                        <address className="mt-3 text-base leading-relaxed text-gray-500">
                                            <a className="p-1" href="mailto:drsmiles.dentvillae@gmail.com">
                                                📧&nbsp;drsmiles.dentvillae@gmail.com
                                            </a>
                                            <br />

                                            <a className="p-1" href="tel:+918310248260">
                                                <b>📞&nbsp;831-0248-260</b>
                                            </a>
                                            <br />
                                            <a
                                                className="p-1"
                                                style={{ display: 'inline-block' }}
                                                target="_blank"
                                                aria-label="Chat on WhatsApp"
                                                href="https://wa.me/918310248260"
                                            >
                                                <img style={{ display: 'flex' }} width={'200px'} alt="Chat on WhatsApp" src="/images/wchat.png" />
                                            </a>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="relative bg-white p-8 xs:p-2 shadow-xl ring-1 ring-gray-900/5 m-0 sm:rounded-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6556180146245!2d77.5780719!3d13.0596859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1965bf53acf9%3A0x4124fae4405dfba1!2sDr.%20Smiles%20Dentvillae%20Multi-speciality%20Dental%20and%20Implant%20Center!5e0!3m2!1sen!2sin!4v1714823657105!5m2!1sen!2sin"
                        width="100%"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </Section>
    );
}
