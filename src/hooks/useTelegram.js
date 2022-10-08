const tg = window.Telegram.WebApp

export function useTelegram() {
    const onClose = () => {
        tg.close()
      }
    const onToogleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
      }
    return {
        onClose,
        onToogleButton,
        tg, 
        user: tg.initDataUnsafe?.user,
    }    
}