

const main = async () =>{
	const [owner, A] = await hre.ethers.getSigners();
	const cpmpiled = await hre.ethers.getContractFactory("WavePortal");
	const execut = await cpmpiled.deploy();
	//const info = await execut.deployed();

	//console.log("Contract deployed to:", info.address);
	//console.log("Contract deployed by:", owner.address);
	console.log(owner.address + "\t" + (await owner.getBalance()).toString());
	console.log(A.address + "\t" + (await  A.getBalance()).toString());
	let waveCount = await execut.getTotalWaves();
	waveCount = await execut.connect(A).wave();
	await waveCount.wait();
	waveCount = await execut.connect(owner).wave();
	await waveCount.wait();
	waveCount = await execut.getTotalWaves();
	console.log(owner.address + "\t" + (await  owner.getBalance()).toString());
	console.log(A.address + "\t" + (await  A.getBalance()).toString());
};

const runMain = async () => {
	try {
	  await main();
	  process.exit(0);
	} catch (error) {
	  console.log(error);
	  process.exit(1);
	}
  };

  runMain();

