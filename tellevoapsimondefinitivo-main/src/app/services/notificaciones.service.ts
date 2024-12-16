import { Injectable, inject } from '@angular/core';
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from '@capacitor/push-notifications';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  utils = inject(UtilsService);

  constructor() {
  }

  ngOnInit() {
  }

  requestPermission() {
   
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        
        PushNotifications.register();
      } else {
        
      }
    });

    
    PushNotifications.addListener('registration', (token: Token) => {
      console.log('Push registration success, token: ' + token.value);
    });

    
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
      console.log('Push received: ' + JSON.stringify(notification));
    });

    
    PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
      console.log('Push action performed: ' + JSON.stringify(notification));
    });
  }

  getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      PushNotifications.addListener('registration', (token: Token) => {
        this.utils.saveInLocalStorage('token', token.value);
        resolve(token.value);
      });

      PushNotifications.addListener('registrationError', (error: any) => {
        reject(error);
      });
    });
  }

  async addListeners() {
    await PushNotifications.addListener('registration', token => {
      console.info('Registration token: ', token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });
  }

  async registerNotifications() {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }

    await PushNotifications.register();
  }

  async getDeliveredNotifications() {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
  }
}