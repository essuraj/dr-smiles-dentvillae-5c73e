import * as React from 'react';
import classNames from 'classnames';

import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';

export default function AddressSection(props) {
    const { elementId, colors, styles = {} } = props;

    return (
        <Section elementId={elementId} className="sb-component-divider-section" colors={colors} styles={styles?.self} {...getDataAttrs(props)}>
            <div className={classNames('w-full')}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6556180146245!2d77.5780719!3d13.0596859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1965bf53acf9%3A0x4124fae4405dfba1!2sDr.%20Smiles%20Dentvillae%20Multi-speciality%20Dental%20and%20Implant%20Center!5e0!3m2!1sen!2sin!4v1714823657105!5m2!1sen!2sin"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </Section>
    );
}
