# DatarocketsRNTemplateTS

DatarocketsRNTemplateTS app

## Build & run

1. Install dependencies
   ```bash
   yarn && (cd ios && pod install)
   ```
2. Create `.env.dev` and `.env.sample` files according to the example from the `.env.sample` file
   and fill them with the data you need.
3. Start packager
   ```bash
   yarn start
   ```
4. Run the app
   ```bash
   yarn android:run    // Android dev version
   yarn ios:run        // iOS dev version
   ```
