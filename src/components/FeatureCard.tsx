import {
  Flex as ดิ้น,
  Text as แท็กข้อความ,
  Stack as สุม,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface คุณสมบัติอุปกรณ์ประกอบฉาก {
  หัวข้อ: string;
  ข้อความ: string;
  ภาพของพระผู้เป็นเจ้า: ReactElement;
}
const ฟีเจอร์การ์ด = ({
  หัวข้อ,
  ข้อความ,
  ภาพของพระผู้เป็นเจ้า,
}: คุณสมบัติอุปกรณ์ประกอบฉาก) => {
  return (
    <สุม textAlign={"left"} w={{base:"100%",sm:"80%",md:"100%",lg:"80%"}}>
      <ดิ้น
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {ภาพของพระผู้เป็นเจ้า}
      </ดิ้น>
      <แท็กข้อความ fontWeight={600}>{หัวข้อ}</แท็กข้อความ>
      <แท็กข้อความ color={"gray.600"}>{ข้อความ}</แท็กข้อความ>
    </สุม>
  );
};
export default ฟีเจอร์การ์ด;
