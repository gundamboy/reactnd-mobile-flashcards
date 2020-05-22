import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications } from "expo";
import * as Permissions from 'expo-permissions';
import {NOTIFICATION_KEY} from "./constants";


export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY, () => {})
        .then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function createNotification () {
    return {
        title: 'Study for you test',
        body: "Don't forget to take a quiz today.",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification () {
    console.group("Set Notifications");
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            console.log("data: ", data);
            if(data === null) {
                console.log("data === null, need to ask permissions");
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        console.log("permission status: ", status);
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync().then();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(20);
                            tomorrow.setMinutes(0);

                            console.log("tomorrows time is: ", tomorrow);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            ).then();

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true),  () => {});

                        }
                    })
                    .catch((error) => {
                        console.log("permissions error: ", error);
                    })
            }
        });
    console.groupEnd();
}

export function generateDeckUID() {
    return Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
}

export function generateImageUrl() {
    const cats = ["animals", "arc", "nature", "tech"];
    return "http://placeimg.com/1000/260/" + cats[Math.floor(Math.random() * cats.length)];
}