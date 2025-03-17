import { BarTop } from '../Components/BarTop';
import { BarSide } from '../Components/BarSide';
import { Body } from '../Components/Body';

export function Layout({ friends, children }) {
    return (
        <div className="bg-customBg h-screen w-full relative">
            <BarTop friends={friends} />
            <BarSide />
            <Body friends={friends}>{children}</Body> 
        </div>
    );
}
