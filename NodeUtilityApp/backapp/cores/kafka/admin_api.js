import { getNewInstance } from "./admin_client.js"

const getTopics = async () => {
    let returnData
    let actionClient = getNewInstance()

    try {
        connect(actionClient).catch(() => {})
        returnData = await actionClient.listTopics()

        let internalTopicIndex = returnData.indexOf('__consumer_offsets')
        if (internalTopicIndex !== -1) returnData.splice(internalTopicIndex, 1)

        disconnect(actionClient)
    }
    catch (error) {
        returnData = {
            error: true,
            message: "Error while trying to get topics from cluster.\nMost likely the target Cluster is offline!"
        }
    }
    return returnData
}

const checkBrokerExistence = async (brokerInfo) => {
    let returnData
    let actionClient = getNewInstance('Node Event Replay Broker Checker', brokerInfo, 3000)

    try {
        await connect(actionClient)
                .then(() => {
                    returnData = { error: false }
                })
                .catch(() => {
                    returnData = {
                        error: true,
                        message: "No such broker exists!"
                    }
                })
        disconnect(actionClient)
    }
    catch (err) {}
    return returnData
}

const connect = async (client) => {
    await client.connect()
}

const disconnect = async (client) => {
    await client.disconnect()
}

export { connect, disconnect, getTopics, checkBrokerExistence }
