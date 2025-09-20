import styled from "styled-components";

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.25rem 1rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return <StyleSidebar></StyleSidebar>;
}

export default Sidebar;
