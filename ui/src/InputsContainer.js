import React from 'react';
import Input from './Input';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';

const InputsContainer = () => {
  
  return (
    <div>
      <div className="wrapper">
        <div>
          <p className="text">{`<Input helperText="some helper text"/>`}</p><br />
          <Input label="Label" placeholder="placeholder" helperText="some helper text"/>
        </div>
        <div>
          <p className="text">{`<Input size="sm" />`}</p><br />
          <Input size="sm" label="Label" />
        </div>
        <div>
          <p className="text">{`<Input size="md" />`}</p><br />
          <Input size="md" label="Label" />
        </div>
        <div>
          <p className="text">{`<Input value="Text" />`}</p><br />
          <Input label="Label" value="Text" />
        </div>
        <div>
          <p className="text">{`<Input error={true} />`}</p><br />
          <Input label="Label" error={true} />
        </div>
        <div>
          <p className="text">{`<Input disabled={true} />`}</p><br />
          <Input label="Label" disabled={true} />
        </div>
        <div>
          <p className="text">{`<Input startIcon={PhoneIcon} />`}</p><br />
          <Input label="Label" startIcon={PhoneIcon} />
        </div>
        <div>
          <p className="text">{`<Input startIcon={LockIcon} />`}</p><br />
          <Input label="Label" startIcon={LockIcon} />
        </div>
      </div>
      <div className="wrapper2">
        <div>
          <p className="text">{`<Input size="fullWidth"/>`}</p><br />
          <Input size="fullWidth" label="Label" />
        </div>
        <div>
          <p className="text">{`<Input size="multiline" rows={4} />`}</p><br />
          <Input size="multiline" rows={4} label="Label" helperText="some helper text"/>
        </div>
      </div>
    </div>
    
  )
};

export default InputsContainer;