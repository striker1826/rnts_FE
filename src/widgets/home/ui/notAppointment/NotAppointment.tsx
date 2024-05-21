import AddAppointmentBtn from '@/features/appointment/ui/addAppointmentBtn/AddAppointmentBtn';
import './notAppointment.scss';

const NotAppointment = () => {
  return (
    <div className="not_appointment_content">
      <div className="character">캐릭터 일러스트</div>
      <p className="description">등록된 약속이 없어요</p>
      <AddAppointmentBtn />
    </div>
  );
};

export default NotAppointment;
