import { AppointmentState } from '@/shared/store/atoms/appointment';
import { Button, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import TimePicker from 'tui-time-picker';
import './index.scss';
import moment from 'moment';

interface Props {
  onClose: () => void;
}

export default function RNTSTimePicker(props: Props) {
  const { onClose } = props;
  const timePickerRef = useRef<any>(null);
  const [_, setAppointment] = useAtom(AppointmentState);

  useEffect(() => {
    timePickerRef.current = new TimePicker('#timepicker', {
      initialHour: 15,
      initialMinute: 33,
      disabledHours: [1, 2, 13, 14],
      inputType: 'spinbox',
    });

    return () => {
      timePickerRef.current?.destroy();
    };
  }, []);

  const handleBtnClick = () => {
    const hour = timePickerRef.current?.getHour();
    const minute = timePickerRef.current?.getMinute();
    const formattedTime = moment({ hour, minute }).format('hh:mm A');

    minute &&
      setAppointment((prev) => {
        return {
          ...prev,
          HHMM: formattedTime,
        };
      });

    onClose();
  };

  return (
    <>
      <div id="timepicker" />
      <Flex>
        <Button onClick={onClose}>닫기</Button>
        <Button onClick={handleBtnClick}>선택 완료</Button>
      </Flex>
    </>
  );
}
