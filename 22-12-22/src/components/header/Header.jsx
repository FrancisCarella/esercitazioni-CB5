import "./header.scss";

export const Header = () => {
  const menuItems = [
    { label: "IT", href: "#", id: 1 },
    { label: "|", id: 2},
    { label: "ENG", href: "#", id: 3 },
  ];

  return (
    <header className="Header">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="nav">
              <ul role="menu">
                {menuItems.map(function (menuItem) {
                  //console.log({ menuItem });
                  return (
                    <li key={menuItem.id} role="menuitem">
                      <a href={menuItem.href}>{menuItem.label}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
