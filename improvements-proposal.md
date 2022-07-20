Considerations:

    1. a. If data is a few hundred I would make the fetch request and not make much changes for that.

        b. I will use the useEffect hook to get request with empty dependencies '[]' so it only runs once.

        c. To store the data I will use the useState hook with the object as default or depending on incoming data.

        d. If the database used is a Relational database then I would use different approaches like Offset pagination,
           Keyset pagination, and Seek pagination.

    -----------------------------------------------------------------------------------------------------------

    2.  Using a random generator for a key like nanoid forces the react application to rerender which is forced
        by the reconciliation process to always view every element in the array as "new" or "changed".

        a. We can avoid re-rendering by using Memoization by using useMemo() Hook by using this hook the computed result is
        saved in the cachedValue variable and this hook will return it each time unless the inputs are changed.

        b. By using UseCallback() Hook it memoizes the onclick callback.

        c. We can also replace useState() with useRef() Hook. In some cases we need to track state changes without re-rendering
        the components. But if we use useRef() Hook we can track changes without causing re-renderings.
