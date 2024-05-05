import { ColorRing } from "react-loader-spinner";
import { LoaderStyled } from "./Loader.styled";

export const Loader = () => {
  return (
    <div>
      <LoaderStyled>
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={[
            "var(--accent-main)",
            "var(--text-main)",
            "var(--accent-secondary)",
            "var(--text-secondary)",
            "var(--bg-main)",
          ]}
        />
      </LoaderStyled>
    </div>
  );
};
