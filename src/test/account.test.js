const { Builder, By } = require('selenium-webdriver');
const { Eyes,
    ClassicRunner,
    Target,
    RectangleSize,
    Configuration,
    BatchInfo, VisualGridRunner, RunnerOptions, StitchMode
} = require('@applitools/eyes-selenium');

describe('Client Tests', () => {

    // Test control inputs to read once and share for all tests
    let applitoolsApiKey;
    let options;
    let baseUrl = 'https://martin-applitools.github.io/demobank/'
    let appName = "demoApp"
    let useUltrafastGrid = false;
    let changeClient = false;

    // Applitools objects to share for all tests
    let batch;
    let config;
    let runner;

    // Test-specific objects
    let driver;
    let eyes;

    // eslint-disable-next-line no-undef
    before(async () => {

        // Read the Applitools API key from an environment variable.
        applitoolsApiKey = process.env.APPLITOOLS_API_KEY;

        //Set Headless Mode and Window Size for Local Execution
        options = ['headless']

        // Create a configuration for Applitools Eyes.
        config = new Configuration();

        // Create the classic runner.
        if (useUltrafastGrid) {
            runner = new VisualGridRunner(new RunnerOptions().testConcurrency(20))
        }
        else {
            runner = new ClassicRunner();
            config.setStitchMode(StitchMode.CSS)

        }

        // Create a new batch for tests.
       // batch = new BatchInfo('Selenium JavaScript');
        // batch.id = process.env.APPLITOOLS_BATCH_ID;

        // Set the Applitools API key so test results are uploaded to your account.

        config.setApiKey(applitoolsApiKey);
        //Set Consistent Browser Size regardless of execution.
        config.setViewportSize(new RectangleSize(1400, 1024))

        // Set the batch for the config.
        //config.setBatch(batch);
    });

    beforeEach(async function() {
        // Open the browser with the Applitools instance.
        let executionCloudUrl = await Eyes.getExecutionCloudUrl()
        driver = new Builder()
            .withCapabilities({
                browserName: 'chrome',
                "applitools:eyesServerUrl": "https://eyesapi.applitools.com",
                "applitools:apiKey": applitoolsApiKey,
                "applitools:useSelfHealing": true,
                "applitools:tunnel": false,
                })
            .usingServer(executionCloudUrl)
            .build()


        // Implicit Waits
        //await driver.manage().setTimeouts( { implicit: 5000 } );

        // Create the Applitools Eyes object connected to the ClassicRunner and set its configuration.
        eyes = new Eyes(runner);
        eyes.setConfiguration(config);

        // Open Eyes to start visual testing.
        await eyes.open(driver, appName, this.currentTest.title);
    })
    afterEach(async function() {

        // Close Eyes to tell the server it should display the results.
        await eyes.close(false);

        // Quit the WebDriver instance.
        await driver.quit();
    });

    // eslint-disable-next-line no-undef
    after(async () => {

        // Close the batch and report visual differences to the console.
        // Note that it forces Mocha to wait synchronously for all visual checkpoints to complete.
        const allTestResults = await runner.getAllTestResults(false);
        console.log(allTestResults);
        await eyes.abortIfNotClosed()
    });

    it('Client Dashboard', async () => {

        // Load the login page.
        // console.log("Navigating to AUT")
        await driver.get(baseUrl);

        // Perform login.
        if (changeClient) {
            await driver.findElement(By.id("username")).sendKeys("client2@applitools.com");
            await driver.findElement(By.id("password")).sendKeys("client2");
            await driver.findElement(By.id("submit-button")).click();
        }
        else {
            await driver.findElement(By.id("username")).sendKeys("client1@applitools.com");
            await driver.findElement(By.id("password")).sendKeys("client1");
            await driver.findElement(By.id("submit-button")).click();
        }

        // Verify the full main page loaded correctly.
        await eyes.check(Target.window().fully().withName("Client Dashboard"));
    });


})