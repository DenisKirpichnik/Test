import styled from "styled-components";

interface JOIProps {
  color?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  fontsize?: string | undefined;
  background?: string | undefined;
  margin?: string | undefined;
  fontweight?: string | undefined;
  boxshadow?: string | undefined;
  flexdirection?: string | undefined;
  descr?: string | undefined;
  padding?: string | undefined;
  justifycontent?: string | undefined;
  borderradius?: string | undefined;
  border?: string | undefined;
}

export const JOIBtn = styled.button.attrs((props?: JOIProps) => ({
  color: props?.color || "white",
  width: props?.width || "243px",
  height: props?.height || "51px",
  fontsize: props?.fontsize || "28px",
  background: props?.background || "#c265e3",
  margin: props?.margin || "0px 0px 0px 0px;",
  padding: props?.padding || "0px 0px 0px 0px;",
  fontweight: props?.fontweight || "500",
  boxshadow: props?.boxshadow || "none",
  border: props?.border || "none",
}))`
  background: ${(props: JOIProps) => props.background};
  color: ${(props: JOIProps) => props.color};
  width: ${(props: JOIProps) => props.width};
  height: ${(props: JOIProps) => props.height};
  margin: ${(props: JOIProps) => props.margin};
  padding: ${(props: JOIProps) => props.padding};
  font-size: ${(props: JOIProps) => props.fontsize};
  font-weight: ${(props: JOIProps) => props.fontweight};
  box-shadow: ${(props: JOIProps) => props.boxshadow};
  border: ${(props: JOIProps) => props.boxshadow};
  border-radius: 10px;

  border: none;
  cursor: pointer;
`;

export const JOIdiv = styled.div.attrs((props?: JOIProps) => ({
  descr: props?.descr,
  color: props?.color || "white",
  width: props?.width || "100%",
  height: props?.height || "50%",
  fontsize: props?.fontsize || "28px",
  background: props?.background || "#c265e3",
  margin: props?.margin || "0px 0px 0px 0px;",
  fontweight: props?.fontweight || "500",
  boxshadow: props?.boxshadow || "none",
  flexdirection: props?.flexdirection || "row",
  justifycontent: props?.justifycontent || "normal",
  borderradius: props?.borderradius || "0px",
}))`
  display: flex;
  background: ${(props: JOIProps) => props.background};
  color: ${(props: JOIProps) => props.color};
  width: ${(props: JOIProps) => props.width};
  height: ${(props: JOIProps) => props.height};
  margin: ${(props: JOIProps) => props.margin};
  font-size: ${(props: JOIProps) => props.fontsize};
  font-weight: ${(props: JOIProps) => props.fontweight};
  box-shadow: ${(props: JOIProps) => props.boxshadow};
  flex-direction: ${(props: JOIProps) => props.flexdirection};
  justify-content: ${(props: JOIProps) => props.justifycontent};
  border-radius: ${(props: JOIProps) => props.borderradius};
`;

export const JOItext = styled.h2.attrs((props?: JOIProps) => ({
  padding: props?.padding || "0px 0px 0px 0px;",
  margin: props?.margin || "0px 0px 0px 0px;",
  fontsize: props?.fontsize || "28px",
  color: props?.color || "white",
  width: props?.width || "100%",
}))`
  width: ${(props: JOIProps) => props.width};
  color: ${(props: JOIProps) => props.color};
  padding: ${(props: JOIProps) => props.padding};
  font-size: ${(props: JOIProps) => props.fontsize};
  font-weight: ${(props: JOIProps) => props.fontweight};
  margin: ${(props: JOIProps) => props.margin};
`;

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
`;
