function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const questions = [
  { text: "The density of water under normal conditions of pressure and temperature, in the International System of Units, is 1.", answer: "F" },
  { text: "The density of water is the same on the Moon as on Mars.", answer: "V" },
  { text: "In the International System of Units, the pressure unit is Pascal.", answer: "V" },
  { text: "In an ordinary home kitchen, it is possible to fill a water bottle in 1 s.", answer: "F" },
  { text: "The Pa/s is a unit of dynamic viscosity.", answer: "F" },
  { text: "Water never flows under laminar conditions.", answer: "F" },
  { text: "Cooking oil has a higher density than water.", answer: "F" },
  { text: "Cooking oil has a smaller viscosity than water.", answer: "F" },
  { text: "A gas cannot cavitate.", answer: "V" },
  { text: "The phenomenon of cavitation in a fluid is related to its viscosity.", answer: "F" },
  { text: "In extreme weather events such as Gloria, rainfall amounts up to 400 mm can be measured.", answer: "V" },
  { text: "A 25 mm rainfall equals 25 l/m².", answer: "V" },
  { text: "A cyclist developing a power of 400 watts by climbing a mountain port means that every second he is able to lift 400 N of weight one meter high.", answer: "V" },
  { text: "With a hydraulic pump giving 10 kW, it is possible to raise 1 m³ of water to a height of 1 m every second.", answer: "V" },
  { text: "An incompressible liquid is characterized by a very small bulk modulus of elasticity.", answer: "F" },
  { text: "For a given shear stress applied to a viscous fluid, the higher its viscosity, the higher the transverse gradient of velocities formed in it is.", answer: "F" },
  { text: "If in a Newtonian fluid the applied shear stress follows a linear law, the velocity profile will be parabolic.", answer: "V" },
  { text: "For practical purposes, it can be stated that water has zero viscosity.", answer: "F" },
  { text: "For practical purposes, it can be stated that water has a constant density.", answer: "V" },
  { text: "If a Newtonian fluid flows, in laminar flow, through a horizontal pipe of constant diameter, the energy slope is positive.", answer: "V" },
  { text: "If a Newtonian fluid flows, in laminar flow, through a horizontal pipe of constant diameter, the pressure decreases in the direction of motion.", answer: "V" },
  { text: "In a Newtonian fluid, the velocity gradient in the direction perpendicular to the contour has the same value as the velocity of the angular deformation.", answer: "V" },
  { text: "Surface tension is responsible for the phenomenon of capillarity.", answer: "V" },
  { text: "Cavitation phenomenon implies the change from liquid to gaseous state.", answer: "V" },
  { text: "Whenever a liquid's pressure drops below atmospheric pressure, there is cavitation.", answer: "F" },
  { text: "In a cube of 50 centimeters wide, there is a volume of water equal to 250 liters.", answer: "F" },
  { text: "In a cube of 50 centimeters of width, there is about 250 kg of water.", answer: "F" },
  { text: "The water that fits in a cube of 50 cm of width has a weight of about 2,450 newtons on Earth.", answer: "F" },
  { text: "At the Moon, the mass of water that fits in a cube of 50 cm of width is less than 250 kg.", answer: "V" },
  { text: "The kinematic viscosity has units of Pa·s.", answer: "F" },
  { text: "The dynamic viscosity of a gas is zero.", answer: "F" },
  { text: "0.1 MPa = 10⁵ N/m².", answer: "V" },
  { text: "In the International System, the units of density are N/m².", answer: "F" },
  { text: "Power can be measured in J·m.", answer: "F" },
  { text: "Energy can be measured in W·s.", answer: "V" },
  { text: "In a deposit open to the atmosphere containing water, evaporation will always occur if the temperature is above 0ºC.", answer: "F" },
  { text: "In a pressure cooker, the water boils at a temperature below 100ºC.", answer: "F" },
  { text: "The normal flow discharge of the Besòs river as it passes through Barcelona is of the order of 10,000 m³/s.", answer: "F" },
  { text: "If by a circular pipe with a cross section of 0.5 m² flows a discharge of 0.75 m³/s, the average fluid velocity will be 1.5 m/s.", answer: "V" },
  { text: "An incompressible fluid has a bulk modulus of elasticity greater than 1 Pa.", answer: "V" },
  { text: "Raising a liter of water from street-level to a tenth floor requires an energy greater than 10 J.", answer: "V" },
  { text: "Raising a liter of water from street-level to a tenth floor requires a power greater than 100 W.", answer: "F" },
  { text: "Relative density is measured in kg/m³.", answer: "F" },
  { text: "The volume of water in the port of Barcelona, which is the largest port in the Mediterranean Sea, is less than 100,000 m³.", answer: "F" },
  { text: "A pressure of 1 atm is approximately equivalent to a water column of 10 m or 101300 Pa.", answer: "V" },
  { text: "Within a viscous fluid in hydrostatic state, all the pressure forces are perpendicular to the planes on which they act.", answer: "V" },
  { text: "Shear stresses can appear within a viscous fluid in hydrostatic state.", answer: "F" },
  { text: "Within a viscous fluid in hydrostatic state, the relative acceleration must be null.", answer: "V" },
  { text: "Cavitation cannot exist within a viscous fluid in hydrostatic state.", answer: "F" },
  { text: "At sea level, relative and absolute pressures are equal.", answer: "F" },
  { text: "The centre of pressure over a non-horizontal planar surface is at a deeper depth than its geometric centre.", answer: "V" },
  { text: "The thrust over a planar surface can pass through its gravity centre.", answer: "V" },
  { text: "In hydrostatics, for an incompressible liquid, in the equation 𝑃 = 𝑃₀ + 𝛾 · 𝑧, z is the depth with respect to a horizontal plane in which the value of the pressure is 𝑃₀.", answer: "V" },
  { text: "For an incompressible fluid of constant density, the pressure inside it will vary linearly with the depth.", answer: "V" },
  { text: "The phenomenon of uplift pressure is related to the Archimedes principle.", answer: "V" },
  { text: "In the analysis of the stability of a gravity dam, not considering the uplift pressure is on the side of safety.", answer: "F" },
  { text: "The uplift pressure of a dam can be controlled by means of drain curtains.", answer: "V" },
  { text: "For a floating sphere of specific weight 4900 N/m³ in contact with water, half of it will be submerged.", answer: "V" },
  { text: "The free surface of a glass of water at relative rest inside a train that moves with non-constant speed can be horizontal.", answer: "F" },
  { text: "The free surface of a glass of water at relative rest inside a train that moves with constant speed is horizontal.", answer: "V" },
  { text: "The free surface of a glass of water at relative rest inside a train that moves with constant acceleration is an inclined plane.", answer: "V" },
  { text: "The line of action of the resultant of the pressures exerted by a liquid at rest on a cylindrical surface with circular cross section cuts the axis of the cylinder.", answer: "V" },
  { text: "The decomposition in horizontal and vertical components to determine the resulting thrust on a surface is a method valid only for the case of curved surfaces.", answer: "F" },
  { text: "The principle of Archimedes is only valid for homogeneous bodies (constant density in all its points).", answer: "F" },
  { text: "The principle of Archimedes is only valid for partially submerged bodies.", answer: "F" },
  { text: "The Archimedes thrust on a floating object depends on the specific weight of the liquid in which it floats.", answer: "V" },
  { text: "Considering a fixed value of viscosity, the greater the shear stress is, the greater the transversal velocity gradient is.", answer: "V" },
  { text: "For a fixed value of the shear stresses, the higher the viscosity is, the greater the transversal velocity gradient is.", answer: "F" },
  { text: "The Reynolds number depends on the density of the fluid.", answer: "V" },
  { text: "The Reynolds number represents the quotient between the inertia forces and the weight.", answer: "F" },
  { text: "A flow with a Reynolds number greater than 8000 is for sure turbulent.", answer: "V" },
  { text: "In steady flow, velocity is tangent to the stream lines.", answer: "V" },
  { text: "According to the continuity equation applied to a non-steady flow in a stream tube, there is no mass accumulation inside it.", answer: "F" },
  { text: "For a general fluid, according to the continuity equation applied to a permanent flow in a stream tube, the volume of fluid per unit of time entering the stream tube is equal to the volume of fluid per unit of time exiting from it.", answer: "F" },
  { text: "The equation of balance of momentum in a control volume is obtained by considering Newton's second law in the three directions of space.", answer: "V" },
  { text: "The principle of momentum conservation provides, at most, three equations.", answer: "V" },
  { text: "The principle of momentum conservation is valid whether the regime is turbulent or laminar.", answer: "V" },
  { text: "The principle of momentum conservation in steady flow relates the velocity of an incompressible fluid with the forces acting on it.", answer: "V" },
  { text: "When applying the principle of momentum conservation, it is not necessary to consider gravity forces.", answer: "F" },
  { text: "In an elbow of a pipe that transports a pressurized flow, the equation of the conservation of momentum allows to calculate the action that the flow exerts on the elbow due to the change of direction that the fluid suffers when passing through it.", answer: "V" },
  { text: "The Bernoulli expression applied to a cross section of a flow represents its mechanical energy per unit of mass.", answer: "F" },
  { text: "The Bernoulli expression applied to a cross section of a flow depends on the distribution of velocities in it.", answer: "V" },
  { text: "Bernoulli's expression is dimensionless.", answer: "F" },
  { text: "Bernelli's expression can only be used in turbulent flows.", answer: "F" },
  { text: "The Bernoulli expression can be used in Newtonian fluids.", answer: "V" },
  { text: "The Bernoulli expression can be used in fluids at rest.", answer: "V" },
  { text: "In a channel or river, for a known flow rate, the critical depth depends on the Manning friction factor.", answer: "F" },
  { text: "In a channel or river, for a known flow rate, the critical depth doesn’t depend on the shape of the cross section.", answer: "F" },
  { text: "In a channel or river, for a known flow rate, the critical depth depends on the slope.", answer: "F" },
  { text: "The Manning coefficient is dimensionless.", answer: "F" },
  { text: "The Manning coefficient in a river can depend on the year’s season.", answer: "V" },
  { text: "Along a prismatic channel in uniform flow, the specific energy is constant.", answer: "V" },
  { text: "Along a prismatic channel in uniform flow, the total mechanic energy remains constant.", answer: "F" },
  { text: "Along a prismatic channel in uniform flow, the Froude number remains constant.", answer: "V" },
  { text: "Along a prismatic channel in uniform flow, the Reynolds number decreases in the flow direction.", answer: "F" },
  { text: "In a prismatic channel, uniform flow can exist immediately upstream of a hydraulic jump.", answer: "V" },
  { text: "In a prismatic channel, uniform flow can exist immediately downstream of a hydraulic jump.", answer: "V" },
  { text: "The friction slope in a channel or in a river can be obtained by means of the Manning formula.", answer: "V" },
  { text: "The friction slope depends on the shape of the cross section of the channel or river.", answer: "V" },
  { text: "The friction slope in a channel or in a river, for a given flow rate and roughness coefficient, decreases as the water depth increases.", answer: "V" },
  { text: "A prismatic channel, with a given slope and geometry, can behave as M or S depending on its Manning coefficient and/or the flow rate.", answer: "V" },
  { text: "Along an S1 profile, the water velocity decreases in the flow direction.", answer: "V" },
  { text: "Along an S1 profile, the specific energy decreases in the flow direction.", answer: "F" },
  { text: "In a very long prismatic M channel, a M3 profile ensures the presence of a hydraulic jump.", answer: "V" },
  { text: "In the zone 1 of a prismatic M channel, the free water surface elevation increases monotonically in the flow direction.", answer: "F" },
  { text: "In a prismatic H channel, in the upstream direction the H2 profile tends to the uniform regime.", answer: "F" },
  { text: "The Bélanger formula allows to obtain the conjugated water depths (sequent depths) in a river.", answer: "F" },
  { text: "The standard step method to compute a surface water profile is only valid for prismatic channels.", answer: "F" },
  { text: "The value of the Bernoulli expression can be negative.", answer: "V" },
  { text: "The value of the Bernoulli expression is independent of the coordinate system that is used.", answer: "F" },
  { text: "The value of Bernoulli's expression always decreases in the direction of the flow.", answer: "V" },
  { text: "The software HECRAS: Since it is necessary to introduce three downstream reach lengths and three Manning Coefficients, it is a two dimensional model.", answer: "F" },
  { text: "The software HECRAS: It can be used rivers, only in the case of a flood event.", answer: "F" },
  { text: "The software HECRAS: It is not suitable for studying the hydraulic behavior of very deep estuaries.", answer: "V" },
  { text: "The software HECRAS: The water depth is one of the results indicated by default in the table of results.", answer: "F" },
  { text: "The software HECRAS: The Froude number is one of the results indicated by default in the table of results.", answer: "V" },
  { text: "The software HECRAS: In the definition of a cross section, a flood plain must always exist, with its width greater than zero at both sides of the banks.", answer: "F" },
  { text: "The software HECRAS: A hydraulic jump is represented in the longitudinal profile as a vertical line.", answer: "F" },
  { text: "The software HECRAS: The Froude number can be used as boundary condition downstream.", answer: "F" },
  { text: "The software HECRAS: By default, considers local energy losses even in the case of prismatic channels.", answer: "V" },
  { text: "The software HECRAS: The option 'mixed' is only valid in the case of prismatic channels.", answer: "F" },
  { text: "The software HECRAS: The interpolation tool between two given cross sections is only valid in the case of prismatic channels.", answer: "F" },
  { text: "The software HECRAS: By default, the critical regime is graphically represented as a green line.", answer: "F" },
  { text: "The software HECRAS: An adequate distance between cross sections could be similar to the width of the sections, although it may be less.", answer: "V" },
  { text: "The software HECRAS: Can be used to analyze the flow in a reach with a negative (adverse) slope.", answer: "V" },
  { text: "The software HECRAS: To compute the water depth, it uses an algorithm such that in case of not finding a solution in a cross section, the algorithm to calculate the water depth stops and does not provide any solution.", answer: "F" },
  { text: "The software HECRAS: The calculation algorithm used to solve the differential equation of the gradually varied flow (equation of the backwater curves) is the 4th order Runge-Kutta method.", answer: "F" },
  { text: "The software HECRAS: In the case of a channel or river with a slope greater than 10%, it always provides a solution, correct or not.", answer: "V" },
  { text: "The software HECRAS: In a project, it is possible to define various geometries and various boundary conditions.", answer: "V" },
  { text: "The software HECRAS: In a project, a 'plan' is defined as the combination of a certain geometry and certain boundary conditions.", answer: "V" },
  { text: "The software HECRAS: In the upstream end, the flow rate and the water level must always be specified.", answer: "F" },
  { text: "The software HECRAS: In a simulation in subcritical flow, only the downstream boundary condition is required.", answer: "V" },
  { text: "The software HECRAS: In a simulation in mixed flow, only the upstream boundary condition is required.", answer: "F" },
  { text: "The software HECRAS: The energy line is one of the results represented by default.", answer: "V" },
  { text: "The software HECRAS: The simulation of a channel of a few kilometers lasts some minutes.", answer: "F" },
  { text: "The software HECRAS: Uses the concept of specific force to locate a hydraulic jump.", answer: "V" },
  { text: "The software HECRAS: Only calculates hydraulic jumps in type S channels.", answer: "F" },
  { text: "The software HECRAS: In rectangular channels, it calculates hydraulic jumps with the Bélanger formula.", answer: "F" },
  { text: "The software HECRAS: The cross section numbering increases in the upstream direction.", answer: "V" },
  { text: "The software HECRAS: The horizontal coordinates that define the points of a cross section increase from the left bank to the right bank direction.", answer: "V" },
  { text: "The software HECRAS: A cross section is defined by relative vertical coordinates, being zero the value for the lowest point, and the absolute value of that point.", answer: "F" },
  { text: "The software HECRAS: By default, in the representation of longitudinal profiles, the upstream end is on the right.", answer: "V" },
  { text: "The software HECRAS: In the step method, there is no limit to the number of iterations.", answer: "F" },
  { text: "The software HECRAS: In the step method, the user can set any value, with no restrictions, for the convergence tolerance of the iterative method.", answer: "F" },
  { text: "The software HECRAS: In curved channels or rivers, the distance between cross sections can be different along the main channel than along the floodplains.", answer: "V" },
  { text: "The software HECRAS: A same flow conditions file can contain more than one value of discharge.", answer: "V" },
  { text: "The software HECRAS: It is only possible to represent more than one profile in a same graph, if the profiles correspond to the same plan.", answer: "F" },
  { text: "The software HECRAS: If the unit system is set to S.I. (metric), the discharge can be expressed in l/s.", answer: "F" },
  { text: "The software HECRAS: It is only possible to choose between two unit systems.", answer: "V" },
  { text: "The software HECRAS: The contraction and expansion losses in a reach are calculated as the product of the loss coefficient and the absolute value of the difference of the energy of velocity between cross sections.", answer: "V" },
  { text: "The software HECRAS: The friction loss in a reach between cross sections is calculated based on the Manning formula.", answer: "V" },
  { text: "For a channel reach in uniform flow: The roughness is constant along the reach.", answer: "V" },
  { text: "For a channel reach in uniform flow: The friction slope is equal to the geometric slope.", answer: "V" },
  { text: "For a channel reach in uniform flow: The cross section is rectangular.", answer: "F" },
  { text: "For a channel reach in uniform flow: The discharge is the same in all cross sections.", answer: "V" },
  { text: "For a channel reach in uniform flow: The water depth is constant along the reach.", answer: "V" },
  { text: "For a channel reach in uniform flow: The water surface elevation is constant along the reach.", answer: "F" },
  { text: "For a hydraulic jump that takes place in a prismatic channel with a trapezoidal cross section, being section 1 immediately upstream of the jump and section 2 downstream of it: The specific energy in section 1 is equal to the specific energy in section 2.", answer: "F" },
  { text: "For a hydraulic jump that takes place in a prismatic channel with a trapezoidal cross section, being section 1 immediately upstream of the jump and section 2 downstream of it: The friction slope in section 1 is larger than the friction slope in section 2.", answer: "V" },
  { text: "For a hydraulic jump that takes place in a prismatic channel with a trapezoidal cross section, being section 1 immediately upstream of the jump and section 2 downstream of it: The water depth in section 1 is lower than the depth in section 2.", answer: "V" },
  { text: "For a hydraulic jump that takes place in a prismatic channel with a trapezoidal cross section, being section 1 immediately upstream of the jump and section 2 downstream of it: The water depth in section 2 is the conjugated water depth (sequent depth) of the depth in section 1.", answer: "V" },
  { text: "For a hydraulic jump that takes place in a prismatic channel with a trapezoidal cross section, being section 1 immediately upstream of the jump and section 2 downstream of it: In section 1 the flow regime is subcritical, while in section 2 it is supercritical.", answer: "F" },
  { text: "For a hydraulic jump that takes place in a prismatic channel with a trapezoidal cross section, being section 1 immediately upstream of the jump and section 2 downstream of it: If the water depth in section 1 is known, the depth in section 2 can be obtained with the Bélanger formula.", answer: "F" },
  { text: "In an M type channel: The normal depth (uniform flow depth) is lower than the critical depth.", answer: "F" },
  { text: "In an M type channel: In supercritical flow, the flow deaccelerates (velocity decreases in the downstream direction).", answer: "V" },
  { text: "In an M type channel: In subcritical flow, the flow always accelerates (velocity increases in the downstream direction).", answer: "F" },
  { text: "In an M type channel: A hydraulic jump cannot exist.", answer: "F" },
  { text: "In an M type channel: If the water depth is lower than the normal depth (uniform flow depth), the friction slope is larger than the geometric slope.", answer: "V" },
  { text: "In an M type channel: If the flow is subcritical and there is a step that implies a raise of the channel bottom in the direction of the flow, the depth will decrease locally in the surroundings of the step.", answer: "V" },
];
shuffleArray(questions);


let currentQuestion = 0;

function displayQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = `(${currentQuestion + 1}/${questions.length}) ${q.text}`;
  document.getElementById("feedback").textContent = '';
}

function checkAnswer(userAnswer) {
  const correct = questions[currentQuestion].answer;
  const feedback = document.getElementById("feedback");
  if (userAnswer === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorrect.";
    feedback.style.color = "red";
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}

// Start the quiz
displayQuestion();
