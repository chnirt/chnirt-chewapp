// import React, { useState } from "react";
// import {
//   Divider,
//   Select,
//   PageHeader,
//   Icon,
//   Menu,
//   Dropdown,
//   ConfigProvider,
//   Row
// } from "antd";
// import { withRouter } from "react-router-dom";
// import gql from "graphql-tag";
// import { useQuery, useApolloClient } from "@apollo/react-hooks";
// import { withTranslation } from "react-i18next";
// import { inject, observer } from "mobx-react";
// import BgDashboard from "../../assets/images/bg-dashboard.jpg";

// const { Option } = Select;

// function Layout(props) {
//   const [currentsite, setCurrentsite] = useState(
//     window.localStorage.getItem("currentsite")
//   );
//   const { children, t, store } = props;
//   const { loading, data } = useQuery(ME);
//   const client = useApolloClient();

//   // console.log(data)

//   function onLogout() {
//     props.store.authStore.logout();
//     client.resetStore();
//     props.history.push("/login");
//   }

//   function handleChange(value) {
//     setCurrentsite(value);
//     window.localStorage.setItem("currentsite", value);
//   }

//   if (!localStorage.getItem("user-permissions")) {
//     onLogout();
//   }

//   const userPermissions = JSON.parse(
//     localStorage.getItem("user-permissions")
//   ).map(item => ({
//     siteName: item.siteName,
//     siteId: item.siteId,
//     permissions: item.sitepermissions
//   }));

//   const currentPage = children.props.location.pathname.slice(4).toUpperCase();

//   const sitesHasPermission = userPermissions.filter(
//     item => item.permissions.indexOf(currentPage) !== -1
//   );

//   const info = (
//     <Menu>
//       <Menu.Item disabled>
//         <Icon type="user" />
//         <span>{!loading && data.me.fullName}</span>
//       </Menu.Item>
//       <Menu.Divider />
//       <Menu.Item onClick={onLogout}>
//         <Icon type="logout" />
//         <span>{t("src.pages.common.logOut")}</span>
//       </Menu.Item>
//     </Menu>
//   );

//   function changeLocale({ key }) {
//     // console.log(key)
//     if (key === "vi-VN") {
//       props.i18n.changeLanguage("vi-VN");
//     } else {
//       props.i18n.changeLanguage("en-US");
//     }
//   }

//   const languages = (
//     <Menu onClick={changeLocale}>
//       <Menu.Item key="vi-VN" value="vi-VN">
//         <span role="img" aria-label="vi">
//           🇻🇳
//         </span>
//       </Menu.Item>
//       <Menu.Item key="en-US" value="en-US">
//         <span role="img" aria-label="en">
//           🇬🇧
//         </span>
//       </Menu.Item>
//     </Menu>
//   );

//   const { me } = data;

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundImage: `url(${BgDashboard})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center center",
//         backgroundAttachment: "fixed",
//         backgroundSize: "cover",
//         overflowY: "scroll",
//         WebkitOverflowScrolling: "touch"
//       }}
//     >
//       <ConfigProvider locale={store.i18nStore.locale}>
//         <PageHeader
//           style={{ backgroundColor: "transparent" }}
//           title={
//             <Icon
//               type="home"
//               onClick={() => children.props.history.push("/🥢")}
//               style={{ color: "#ffffff" }}
//             />
//           }
//           onBack={() => children.props.history.goBack()}
//           backIcon={<Icon type="arrow-left" style={{ color: "#ffffff" }} />}
//           extra={[
//             <Select
//               key="1"
//               disabled={children.props.location.pathname.split("/").length > 3}
//               defaultValue={currentsite}
//               style={{ width: "10em", marginRight: ".5em" }}
//               onChange={handleChange}
//             >
//               {children.props.location.pathname === "/🥢"
//                 ? JSON.parse(
//                     window.localStorage.getItem("user-permissions")
//                   ).map(item => (
//                     <Option key={item.siteId} value={item.siteId}>
//                       {item.siteName}
//                     </Option>
//                   ))
//                 : sitesHasPermission.map(item => (
//                     <Option key={item.siteId} value={item.siteId}>
//                       {item.siteName}
//                     </Option>
//                   ))}
//             </Select>,
//             <Dropdown
//               key="2"
//               overlay={info}
//               trigger={["click"]}
//               placement="bottomCenter"
//             >
//               <Icon
//                 type="user"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   marginRight: ".5em",
//                   paddingBottom: 9
//                 }}
//               />
//             </Dropdown>,
//             <Dropdown
//               key="3"
//               overlay={languages}
//               trigger={["click"]}
//               placement="bottomCenter"
//             >
//               <span
//                 style={{ color: "#fff", cursor: "pointer", paddingBottom: 9 }}
//               >
//                 {window.localStorage.getItem("i18nextLng") === "vi-VN"
//                   ? "VI"
//                   : "EN"}
//               </span>
//             </Dropdown>
//           ]}
//           footer={<Divider style={{ margin: "0" }} />}
//         />
//       </ConfigProvider>
//       <Row
//         style={{
//           height: "calc(100vh - 67px)"
//         }}
//       >
//         {React.cloneElement(children, { currentsite, me, t })}
//       </Row>
//     </div>
//   );
// }

// const ME = gql`
//   query {
//     me {
//       _id
//       fullName
//     }
//   }
// `;

// export default withRouter(
//   inject("store")(observer(withTranslation("translations")(Layout)))
// );

import React from "react";

function index(props) {
  return (
    <div>
      Layout
      {props.children}
    </div>
  );
}

export default index;
