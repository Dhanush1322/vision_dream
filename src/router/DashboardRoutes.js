import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../userlogin/Login";  // Adjust path as needed!

import DashboardPage from "../pages/DashboardPage";
import EditPassword from "../pages/EditPasswordPage";
import UserProfileAccess from "../pages/UserProfileAccess";
import BlockUser from "../pages/BlockUser";
import UnblockUser from "../pages/UnblockUser";
import ActiveUser from "../pages/ActiveUser";
import InactiveUser from "../pages/InactiveUser";
import TotalUser from "../pages/TotalUser";
import PendingFundRequest from "../pages/PendingFundRequest";
import ApprovedFundRequest from "../pages/ApprovedFundRequest";
import RejectedFundRequest from "../pages/RejectedFundRequest";
import FundConvertReport from "../pages/FundConvertReport";
import PendingWithdrawal from "../pages/PendingWithdrawal";
import PaidWithdrawal from "../pages/PaidWithdrawal";
import RejectedWithdrawal from "../pages/RejectedWithdrawal";
import NoticeUpdate from "../pages/NoticeUpdate";
import OutstandingBalance from "../pages/OutstandingBalance";
import UploadQrCode from "../pages/UploadQrCode";
import BalanvceAddDedut from "../pages/BalanvceAddDedut";
import BalanceHistory from "../pages/BalanceHistory";
import FundAddDedut from "../pages/FundAddDedut";
import FundHistory from "../pages/FundHistory";
import SliderImageUpload from "../pages/SliderImageUpload";
import WithdrawalOnOff from "../pages/WithdrawalOnOff";
import ComposeMessageAll from "../pages/ComposeMessageAll";
import ComposeMessageSingle from "../pages/ComposeMessageSingle";
import Inbox from "../pages/Inbox";
import OutBox from "../pages/OutBox";

const DashboardRoutes = () => {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/" element={<Login />} />

      {/* Dashboard routes (protected ideally) */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="DashboardPage" element={<DashboardPage />} />
        <Route path="EditPassword" element={<EditPassword />} />
        <Route path="UserProfileAccess" element={<UserProfileAccess />} />
        <Route path="BlockUser" element={<BlockUser />} />
        <Route path="UnblockUser" element={<UnblockUser />} />
        <Route path="ActiveUser" element={<ActiveUser />} />
        <Route path="InactiveUser" element={<InactiveUser />} />
        <Route path="TotalUser" element={<TotalUser />} />
        <Route path="PendingFundRequest" element={<PendingFundRequest />} />
        <Route path="ApprovedFundRequest" element={<ApprovedFundRequest />} />
        <Route path="RejectedFundRequest" element={<RejectedFundRequest />} />
        <Route path="FundConvertReport" element={<FundConvertReport />} />
        <Route path="PendingWithdrawal" element={<PendingWithdrawal />} />
        <Route path="PaidWithdrawal" element={<PaidWithdrawal />} />
        <Route path="RejectedWithdrawal" element={<RejectedWithdrawal />} />
        <Route path="NoticeUpdate" element={<NoticeUpdate />} />
        <Route path="OutstandingBalance" element={<OutstandingBalance />} />
        <Route path="UploadQrCode" element={<UploadQrCode />} />
        <Route path="BalanceAddDedut" element={<BalanvceAddDedut />} />
        <Route path="BalanceHistory" element={<BalanceHistory />} />
        <Route path="FundAddDedut" element={<FundAddDedut />} />
        <Route path="FundHistory" element={<FundHistory />} />
        <Route path="SliderImageUpload" element={<SliderImageUpload />} />
        <Route path="WithdrawalOnOff" element={<WithdrawalOnOff />} />
        <Route path="ComposeMessageAll" element={<ComposeMessageAll />} />
        <Route path="ComposeMessageSingle" element={<ComposeMessageSingle />} />
        <Route path="Inbox" element={<Inbox />} />
        <Route path="OutBox" element={<OutBox />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
