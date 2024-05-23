import TendencyBtn from '@/entities/tendency/ui/tendencyBtn/TendencyBtn';
import './tendencyList.scss';

interface TendencyListProps {
  select: string;
  setSelect: (state: string) => void;
}

const TendencyList = ({ select, setSelect }: TendencyListProps) => {
  return (
    <div className="tendency_list_container">
      <TendencyBtn
        id="ealry"
        title="출발했어?"
        description="먼저 도착해서 물어보는 일찍이"
        select={select}
        onClick={() => {
          setSelect('ealry');
        }}
      />
      <TendencyBtn id="late" title="출발했어!" description="지금 나가면서 대답하는 지각이" select={select} onClick={() => setSelect('late')} />
    </div>
  );
};

export default TendencyList;
