import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #2d72d9;
  color: #2d72d9;
  font-size: 1em;
  margin-bottom: 24px;
  background: #fff;
`;

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
