import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../components/Button';
import Textbox from '../components/Textbox';
import RadioBtn from '../components/RadioBtn';
import Checkbox from '../components/Checkbox';
import Collapse from '../components/Collapse';

export default function Documentation() {
  
  const [collapseOptions, setCollapseOptions] = useState([
    {label: "option 1", value: "opt1", isDisable: false}
  ])

  return (
    <Style className='mainContainer'>
      <section className="iraiScreen">
        <div className="docNode">
          <Collapse label="Select Option" options={collapseOptions} name="select" />
        </div>
        <div className="docNode">
          <Checkbox label="Radio Button User interface" />
        </div>
        <div className="docNode">
          <RadioBtn label="Radio Button User interface" />
        </div>
        <div className="docNode">
          <Button className="primary" label="Primary button" disable={false} />
        </div>
        <div className="docNode">
          <Button className="secondary" label="Secondary button" disable={false}  />
        </div>
        <div className="docNode">
          <Button className="tiny" label="Tiny button" disable={false}  />
        </div>
        <div className="docNode">
          <Button className="disabled" label="Disabled button" disable={true}  />
        </div>
        <div className="docNode">
          <Button className="tiny" label="Tiny Disabled button" disable={true}  />
        </div>
        <div className="docNode">
          <Textbox placeholder="Enter Placeholder" />
        </div>
      </section>
      <footer>
        <Button className="primary" label="SUBMIT" disable={false}  />
      </footer>
    </Style>
  )
}

const Style = styled.div`
  .iraiScreen {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`