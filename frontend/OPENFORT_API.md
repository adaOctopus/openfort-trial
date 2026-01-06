# How to Use Openfort API

## 1. Set Up Environment Variables

Create a `.env.local` file in the `frontend` directory with your Openfort keys:

```env
OPENFORT_SECRET_KEY=your_openfort_secret_key_here
SHIELD_PUBLISHABLE_KEY=your_shield_publishable_key_here
SHIELD_SECRET_KEY=your_shield_secret_key_here
SHIELD_ENCRYPTION_SHARE=your_shield_encryption_share_here
```

## 2. Call the API from Frontend

You can call this API endpoint from any component or page. Here's an example:

```typescript
const createSession = async () => {
  try {
    const response = await fetch('/api/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = await response.json();
    console.log('Session:', data.session);
    
    return data.session;
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 3. API Endpoint Details

- **URL**: `/api/session`
- **Method**: `POST`
- **Response**: 
  ```json
  {
    "session": { ... }
  }
  ```

