/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import React, { useState } from 'react';
import { EuiRadioGroup } from '@elastic/eui';
import { htmlIdGenerator } from '@elastic/eui/lib/services';

const idPrefix = htmlIdGenerator()();

const DeliveryChannelRadio = () => {
  const radios = [
    {
      id: `${idPrefix}3`,
      label: 'None (report will be available in Reports List page)',
    },
    {
      id: `${idPrefix}4`,
      label: 'Email',
    },
    {
      id: `${idPrefix}5`,
      label: 'Chime',
    },
    {
      id: `${idPrefix}6`,
      label: 'Other (webhook)'
    }
  ];
  
  const [radioIdSelected, setRadioIdSelected] = useState(`${idPrefix}3`);

  const handleChangeDeliveryChannel = optionId => {
    setRadioIdSelected(optionId);
  };
  
  return (
      <EuiRadioGroup
        options={radios}
        idSelected={radioIdSelected}
        onChange={handleChangeDeliveryChannel}
        name="deliveryChannelRadioGroup"
        legend={{
          children: <span>This is a legend for a radio group</span>,
        }}
      />
  );
};

export { DeliveryChannelRadio };