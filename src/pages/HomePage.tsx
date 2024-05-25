import { fetcher } from '@/shared/service/fetch';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import AppointmentHeader from '@/widgets/home/ui/appointmentHeader/AppointmentHeader';
import HomeContentLayout from '@/widgets/home/ui/contentLayout/HomeContentLayout';
import Header from '@/widgets/home/ui/header/Header';
import MenuBar from '@/widgets/home/ui/menuBar/MenuBar';
import NotAppointment from '@/widgets/home/ui/notAppointment/NotAppointment';
import TimelinePadding from '@/widgets/home/ui/timelinePadding/TimelinePadding';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ['/api/userappt/myappt'],
    queryFn: () => {
      return fetcher.get('/api/userappt/myappt').then((res) => res.data);
    },
  });

  return (
    <>
      <Header />
      <AppointmentHeader />
      {data && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TimelinePadding>
            <Timeline isHome appointmentList={data} />
          </TimelinePadding>
          <MenuBar isFixed />
        </div>
      )}
      <HomeContentLayout>
        {!data && (
          <>
            <NotAppointment />
            <MenuBar isFixed={false} />
          </>
        )}
      </HomeContentLayout>
    </>
  );
};

export default HomePage;
