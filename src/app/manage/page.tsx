'use client'
import React, { useContext, useState } from 'react';
import WorldCupManageForm from '@/components/manage/WorldCupManageForm';
import WorldCupContentsManageListWrapper from '@/components/manage/WorldCupContentsManagerListWrapper';
import { WorldCupManageContext } from '@/hooks/WorldCupManageContext';
import { WorldCupContentsManageContext } from '@/hooks/WorldCupContentsManageContext';





/*
    월드컵 관리 페이지를 표현합니다.
*/
const ManageForm = () => {

    const [worldCupContentsManageContext, setWorldCupContentsManageContext] = useState([]);

    console.log("새로운 컨텐츠 리스트", worldCupContentsManageContext);

    const [isCreateWorldCup, setIsCreateWorldCup] = useState("");
    return (
        <div>
            <WorldCupContentsManageContext.Provider value={{ worldCupContentsManageContext, setWorldCupContentsManageContext }}>
                <WorldCupManageContext.Provider value={{ isCreateWorldCup, setIsCreateWorldCup }}>

                    <div className='flex my-5'>
                        <div className='flex-none m-5'>
                            <WorldCupManageForm />
                        </div>

                        <div className='flex-auto'>
                            <WorldCupContentsManageListWrapper />
                        </div>
                    </div>

                </WorldCupManageContext.Provider>
            </WorldCupContentsManageContext.Provider>
        </div>
    );
};

export default ManageForm;