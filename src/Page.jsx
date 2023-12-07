import { NavLink } from 'react-router-dom';

export const Page = ({ title }) => {
  return (
    <div>
      <h2>Hello {title} Page</h2>
      <NavLink to="/test">test</NavLink>
    </div>
  );
};
