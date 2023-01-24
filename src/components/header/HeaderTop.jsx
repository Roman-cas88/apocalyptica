import { Container, Navbar, Col, Row, Dropdown, NavItem, NavLink} from "react-bootstrap/";
import { BsFillQuestionCircleFill, } from "react-icons/bs";
import { Link } from "react-router-dom"; 
import { HeaderLanguage } from './HeaderLanguage'
import { useTranslation } from "react-i18next";

export default function HeaderTop() {
  let unsetStyle = {all: 'unset'};
  const { t } = useTranslation();

  return (
    <Navbar className="p-0">
      <Container className="justify-content-end ">
        <Row >
          <Col>
          <HeaderLanguage />
          </Col>
          <Col>
            <Dropdown  as={NavItem}>
              <Dropdown.Toggle  as={NavLink} >        
                <BsFillQuestionCircleFill className="mx-1" />{t("headertop.help")}              
              </Dropdown.Toggle>
              <Dropdown.Menu >    
                <Dropdown.Item >
                <Link to="/"  style={unsetStyle}>{t("nav.faq")}</Link>
                  </Dropdown.Item>
                <Dropdown.Item href="#">
                <Link to="/"  style={unsetStyle}>{t("nav.return")}</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </Navbar>

  );
}
