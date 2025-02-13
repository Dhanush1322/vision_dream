import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './userlogin/Login';

import DashboardPage from './dashboard/pages/DashboardPage'

import EditPassword from './dashboard/pages/EditPasswordPage';

import UserProfileAccess from './dashboard/pages/UserProfileAccess';
import BlockUser from './dashboard/pages/BlockUser';
import UnblockUser from './dashboard/pages/UnblockUser';
import ActiveUser from './dashboard/pages/ActiveUser';
import InactiveUser from './dashboard/pages/InactiveUser';
import TotalUser from './dashboard/pages/TotalUser';
import PendingFundRequest from './dashboard/pages/PendingFundRequest';
import ApprovedFundRequest from './dashboard/pages/ApprovedFundRequest';
import RejectedFundRequest from './dashboard/pages/RejectedFundRequest';
import FundConvertReport from './dashboard/pages/FundConvertReport';
import PendingWithdrawal from './dashboard/pages/PendingWithdrawal';
import PaidWithdrawal from './dashboard/pages/PaidWithdrawal';
import RejectedWithdrawal from './dashboard/pages/RejectedWithdrawal';
import NoticeUpdate from './dashboard/pages/NoticeUpdate';
import OutstandingBalance from './dashboard/pages/OutstandingBalance';
import UploadQrCode from './dashboard/pages/UploadQrCode';
import BalanvceAddDedut from './dashboard/pages/BalanvceAddDedut';
import BalanceHistory from './dashboard/pages/BalanceHistory';
import FundAddDedut from './dashboard/pages/FundAddDedut';
import FundHistory from './dashboard/pages/FundHistory';
import SliderImageUpload from './dashboard/pages/SliderImageUpload';
import WithdrawalOnOff from './dashboard/pages/WithdrawalOnOff';
import ComposeMessageAll from './dashboard/pages/ComposeMessageAll';
import ComposeMessageSingle from './dashboard/pages/ComposeMessageSingle';
import Inbox from './dashboard/pages/Inbox';
import OutBox from './dashboard/pages/OutBox';
function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        {/* Admin Dashboard */}
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/EditPassword" element={<EditPassword />} />
        <Route path="/UserProfileAccess" element={<UserProfileAccess />} />
        <Route path="/BlockUser" element={<BlockUser />} />
        <Route path="/UnblockUser" element={<UnblockUser />} />
        <Route path="/ActiveUser" element={<ActiveUser />} />
        <Route path="/InactiveUser" element={<InactiveUser />} />
        <Route path="/TotalUser" element={<TotalUser />} />
        <Route path="/PendingFundRequest" element={<PendingFundRequest />} />
        <Route path="/ApprovedFundRequest" element={<ApprovedFundRequest />} />
        <Route path="/RejectedFundRequest" element={<RejectedFundRequest />} />
        <Route path="/FundConvertReport" element={<FundConvertReport />} />
        <Route path="/PendingWithdrawal" element={<PendingWithdrawal />} />
        <Route path="/PaidWithdrawal" element={<PaidWithdrawal />} />
        <Route path="/RejectedWithdrawal" element={<RejectedWithdrawal />} />
        <Route path="/NoticeUpdate" element={<NoticeUpdate />} />
        <Route path="/OutstandingBalance" element={<OutstandingBalance />} />
        <Route path="/UploadQrCode" element={<UploadQrCode />} />
        <Route path="/BalanceAddDedut" element={<BalanvceAddDedut />} />
        <Route path="/BalanceHistory" element={<BalanceHistory />} />
        <Route path="/FundAddDedut" element={<FundAddDedut />} />
        <Route path="/FundHistory" element={<FundHistory />} />
        <Route path="/SliderImageUpload" element={<SliderImageUpload />} />
        <Route path="/WithdrawalOnOff" element={<WithdrawalOnOff />} />
        <Route path="/ComposeMessageAll" element={<ComposeMessageAll />} />
        <Route path="/ComposeMessageSingle" element={<ComposeMessageSingle />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/OutBox" element={<OutBox />} />
        
      </Routes>
    </Router>
  );
}

export default App;
