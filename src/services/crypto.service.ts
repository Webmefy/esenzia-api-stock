import crypto from 'crypto';

class CryptoService {
    public verifyHmac(data: string, secret: string, hmac: string) {
        const hash = crypto.createHmac('sha256', secret).update(data, 'utf8').digest('base64');
        return hash === hmac;
    }
}

export default new CryptoService();
