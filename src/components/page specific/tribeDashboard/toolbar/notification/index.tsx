"use client"

import { AuthContext, TAuthContext } from '@/utils/contexts/Auth';
import { NotificationContext, TNotificationContext } from '@/utils/contexts/Notification';
import React, { useContext, useEffect } from 'react'
import NotificationList from './notificationList';

interface Props {
  tribeId: string;
}

export default function Notifications(props: Props) {
  const { readNotifications, unreadNotifications, readUnreadNotifications } = useContext(NotificationContext) as TNotificationContext
  const { userId } = useContext(AuthContext) as TAuthContext

  useEffect(() => {
    readUnreadNotifications()
  }, [])

  return (
    <div className='z-10 flex top-0 right-0 absolute flex-row justify-center bg-white rounded-md border-2 border-solid border-black w-[300px]'>
      <div className='flex-col justify-center'>
        <h3 className='text-center my-3 font-semibold text-xl'>Notifications</h3>
        <div className='flex overflow-y-auto flex-col rounded-sm border-solid border-black w-[275px] h-[275px] mt-4 scrollbar-non'>
          {!readNotifications.length && !unreadNotifications.length ? (<div>No notifications Available</div>) : null}
          <NotificationList notifications={unreadNotifications} userId={userId} />
          <NotificationList notifications={readNotifications} userId={userId} />
        </div> 
      </div>
    </div>
  )
}