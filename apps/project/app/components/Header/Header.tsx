import { globalStyles } from "@ui/styles/globalTheme.css";
import { Layout } from "antd";

const { Header: AntdHeader } = Layout;

export const enum HeaderType {
  Default = "Default",
  None = "None",
}

type Props = {
  type?: HeaderType;
};

export default function Header({ type = HeaderType.Default }: Props) {
  if (type === HeaderType.None) {
    return null;
  }

  return (
    <AntdHeader
      style={{ background: globalStyles.color.blackAlpha10 }}
    ></AntdHeader>
  );
}
