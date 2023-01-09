import "./text.css";

const variantObj = {
  /*body: "text-md",
  title: "text-lg mb-sm",*/
};

export const Text = (props) => {
  const {
    as = "div",
    children = "title",
    variant = "body",
    ...attributes
  } = props;

  const Element = as;
  return (
    <Element className={`txt ${variantObj[variant] ?? ""}`} {...attributes}>
      {children}
    </Element>
  );
};
