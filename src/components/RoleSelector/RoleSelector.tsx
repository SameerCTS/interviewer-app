import React from 'react';
import { Select } from './RoleSelector.styles';

interface RoleSelectorProps {
  roles: string[];
  selectedRole: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ roles, selectedRole, onChange }) => (
  <Select value={selectedRole} onChange={onChange}>
    {roles.map(role => (
      <option key={role} value={role}>{role}</option>
    ))}
  </Select>
);

export default RoleSelector;
